import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { defaultContentData } from '../data'
import type { ContentData, EventItem, Initiative, ServiceItem, SiteInfo } from '../types'

const CONTENT_KEY = 'velmont_content_data'

type ContentContextValue = {
  content: ContentData
  updateSiteInfo: (siteInfo: SiteInfo) => void
  updateMissionVision: (missionText: string, visionText: string) => void
  addEvent: (event: EventItem) => void
  addService: (service: ServiceItem) => void
  addInitiative: (initiative: Initiative) => void
  addGalleryUrl: (url: string) => { ok: boolean; error?: string }
}

const ContentContext = createContext<ContentContextValue | undefined>(undefined)

function readContent(): ContentData {
  const raw = localStorage.getItem(CONTENT_KEY)
  if (!raw) return defaultContentData
  try {
    const parsed = JSON.parse(raw) as ContentData
    return {
      ...defaultContentData,
      ...parsed,
      siteInfo: { ...defaultContentData.siteInfo, ...parsed.siteInfo },
      coreInitiatives: parsed.coreInitiatives?.length ? parsed.coreInitiatives : defaultContentData.coreInitiatives,
      events: parsed.events?.length ? parsed.events : defaultContentData.events,
      services: parsed.services?.length ? parsed.services : defaultContentData.services,
      galleryUrls: parsed.galleryUrls ?? [],
    }
  } catch {
    return defaultContentData
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContentData)

  useEffect(() => {
    const stored = readContent()
    setContent(stored)
  }, [])

  const updateContent = (next: ContentData) => {
    setContent(next)
    localStorage.setItem(CONTENT_KEY, JSON.stringify(next))
  }

  const value = useMemo<ContentContextValue>(
    () => ({
      content,
      updateSiteInfo: (siteInfo) => updateContent({ ...content, siteInfo }),
      updateMissionVision: (missionText, visionText) => updateContent({ ...content, missionText, visionText }),
      addEvent: (event) => updateContent({ ...content, events: [event, ...content.events] }),
      addService: (service) => updateContent({ ...content, services: [service, ...content.services] }),
      addInitiative: (initiative) => updateContent({ ...content, coreInitiatives: [initiative, ...content.coreInitiatives] }),
      addGalleryUrl: (url) => {
        const cleanUrl = url.trim()
        if (!cleanUrl) return { ok: false, error: 'Image URL is required.' }
        if (content.galleryUrls.some((item) => item.toLowerCase() === cleanUrl.toLowerCase())) {
          return { ok: false, error: 'Image URL already exists.' }
        }
        updateContent({ ...content, galleryUrls: [cleanUrl, ...content.galleryUrls] })
        return { ok: true }
      },
    }),
    [content]
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used inside ContentProvider')
  return ctx
}
