export type Role = 'admin' | 'superadmin'

export type User = {
  username: string
  password: string
  role: Role
}

export type SessionUser = Omit<User, 'password'>

export type SiteInfo = {
  name: string
  email: string
  phone: string
  taxId: string
  address: string
  visitingHours: string
}

export type Initiative = {
  title: string
  desc: string
}

export type EventItem = {
  title: string
  date: string
  time: string
  details: string
}

export type ServiceItem = {
  title: string
  fee: string
  desc: string
}

export type ContentData = {
  siteInfo: SiteInfo
  missionText: string
  visionText: string
  coreInitiatives: Initiative[]
  events: EventItem[]
  services: ServiceItem[]
  galleryUrls: string[]
}
