import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import { useContent } from '../context/ContentContext'
import type { Role } from '../types'

function AdminPage() {
  const { user, users, addAdminUser } = useAuth()
  const { content, updateSiteInfo, updateMissionVision, addEvent, addService, addInitiative, addGalleryUrl } = useContent()

  const [siteInfoForm, setSiteInfoForm] = useState(content.siteInfo)
  const [missionText, setMissionText] = useState(content.missionText)
  const [visionText, setVisionText] = useState(content.visionText)

  const [eventTitle, setEventTitle] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventDetails, setEventDetails] = useState('')

  const [serviceTitle, setServiceTitle] = useState('')
  const [serviceFee, setServiceFee] = useState('')
  const [serviceDesc, setServiceDesc] = useState('')

  const [initiativeTitle, setInitiativeTitle] = useState('')
  const [initiativeDesc, setInitiativeDesc] = useState('')

  const [galleryUrl, setGalleryUrl] = useState('')

  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newRole, setNewRole] = useState<Role>('admin')
  const [message, setMessage] = useState('')

  if (!user) return null

  useEffect(() => {
    setSiteInfoForm(content.siteInfo)
    setMissionText(content.missionText)
    setVisionText(content.visionText)
  }, [content])

  const onSaveBasics = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateSiteInfo(siteInfoForm)
    updateMissionVision(missionText, visionText)
    setMessage('Basic content updated.')
  }

  const onAddEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!eventTitle.trim() || !eventDate.trim() || !eventTime.trim() || !eventDetails.trim()) return
    addEvent({ title: eventTitle.trim(), date: eventDate.trim(), time: eventTime.trim(), details: eventDetails.trim() })
    setEventTitle('')
    setEventDate('')
    setEventTime('')
    setEventDetails('')
    setMessage('Event added.')
  }

  const onAddService = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!serviceTitle.trim() || !serviceFee.trim() || !serviceDesc.trim()) return
    addService({ title: serviceTitle.trim(), fee: serviceFee.trim(), desc: serviceDesc.trim() })
    setServiceTitle('')
    setServiceFee('')
    setServiceDesc('')
    setMessage('Service added.')
  }

  const onAddInitiative = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!initiativeTitle.trim() || !initiativeDesc.trim()) return
    addInitiative({ title: initiativeTitle.trim(), desc: initiativeDesc.trim() })
    setInitiativeTitle('')
    setInitiativeDesc('')
    setMessage('Initiative added.')
  }

  const onAddGalleryUrl = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = addGalleryUrl(galleryUrl)
    setMessage(result.ok ? 'Gallery image URL added.' : result.error || 'Unable to add image URL.')
    if (result.ok) setGalleryUrl('')
  }

  const onCreateUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = addAdminUser(newUsername, newPassword, newRole)
    setMessage(result.ok ? 'User created.' : result.error || 'Unable to create user.')
    if (result.ok) {
      setNewUsername('')
      setNewPassword('')
      setNewRole('admin')
    }
  }

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-7xl space-y-6 px-5 pb-20 md:px-8 md:pb-24">
        <div className="rounded-[1.8rem] bg-[#2A1B12] px-8 py-8 text-[#F8EEDC]">
          <p className="text-xs uppercase tracking-[0.24em] text-[#E8B879]">Content Admin</p>
          <h1 className="mt-3 text-4xl font-black">Website Content Manager</h1>
          <p className="mt-3 text-sm text-[#F0DFCA]">Logged in as {user.username} ({user.role}). All updates are saved in localStorage.</p>
          {message && <p className="mt-3 text-sm font-semibold text-[#E8B879]">{message}</p>}
        </div>

        <form onSubmit={onSaveBasics} className="rounded-2xl border border-[#4A3523]/20 bg-white p-6">
          <h2 className="text-2xl font-black text-[#2D1D12]">Site Info + Mission/Vision</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input value={siteInfoForm.name} onChange={(event) => setSiteInfoForm({ ...siteInfoForm, name: event.target.value })} placeholder="Site name" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            <input value={siteInfoForm.phone} onChange={(event) => setSiteInfoForm({ ...siteInfoForm, phone: event.target.value })} placeholder="Phone" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            <input value={siteInfoForm.email} onChange={(event) => setSiteInfoForm({ ...siteInfoForm, email: event.target.value })} placeholder="Email" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            <input value={siteInfoForm.taxId} onChange={(event) => setSiteInfoForm({ ...siteInfoForm, taxId: event.target.value })} placeholder="Tax ID" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            <input value={siteInfoForm.address} onChange={(event) => setSiteInfoForm({ ...siteInfoForm, address: event.target.value })} placeholder="Address" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2 md:col-span-2" />
            <input value={siteInfoForm.visitingHours} onChange={(event) => setSiteInfoForm({ ...siteInfoForm, visitingHours: event.target.value })} placeholder="Visiting hours" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2 md:col-span-2" />
            <textarea rows={3} value={missionText} onChange={(event) => setMissionText(event.target.value)} placeholder="Mission text" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2 md:col-span-2" />
            <textarea rows={3} value={visionText} onChange={(event) => setVisionText(event.target.value)} placeholder="Vision text" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2 md:col-span-2" />
          </div>
          <button type="submit" className="mt-4 rounded-lg bg-[#3E2719] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F7ECDB]">Save Basics</button>
        </form>

        <div className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={onAddEvent} className="rounded-2xl border border-[#4A3523]/20 bg-white p-6">
            <h2 className="text-xl font-black text-[#2D1D12]">Add Event</h2>
            <div className="mt-4 space-y-3">
              <input value={eventTitle} onChange={(event) => setEventTitle(event.target.value)} placeholder="Event title" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <input value={eventDate} onChange={(event) => setEventDate(event.target.value)} placeholder="Event date" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <input value={eventTime} onChange={(event) => setEventTime(event.target.value)} placeholder="Event time" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <textarea rows={3} value={eventDetails} onChange={(event) => setEventDetails(event.target.value)} placeholder="Event details" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            </div>
            <button type="submit" className="mt-4 rounded-lg bg-[#3E2719] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F7ECDB]">Add Event</button>
          </form>

          <form onSubmit={onAddService} className="rounded-2xl border border-[#4A3523]/20 bg-white p-6">
            <h2 className="text-xl font-black text-[#2D1D12]">Add Service</h2>
            <div className="mt-4 space-y-3">
              <input value={serviceTitle} onChange={(event) => setServiceTitle(event.target.value)} placeholder="Service title" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <input value={serviceFee} onChange={(event) => setServiceFee(event.target.value)} placeholder="Service fee" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <textarea rows={3} value={serviceDesc} onChange={(event) => setServiceDesc(event.target.value)} placeholder="Service description" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            </div>
            <button type="submit" className="mt-4 rounded-lg bg-[#3E2719] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F7ECDB]">Add Service</button>
          </form>

          <form onSubmit={onAddInitiative} className="rounded-2xl border border-[#4A3523]/20 bg-white p-6">
            <h2 className="text-xl font-black text-[#2D1D12]">Add Initiative</h2>
            <div className="mt-4 space-y-3">
              <input value={initiativeTitle} onChange={(event) => setInitiativeTitle(event.target.value)} placeholder="Initiative title" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <textarea rows={3} value={initiativeDesc} onChange={(event) => setInitiativeDesc(event.target.value)} placeholder="Initiative description" className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            </div>
            <button type="submit" className="mt-4 rounded-lg bg-[#3E2719] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F7ECDB]">Add Initiative</button>
          </form>

          <form onSubmit={onAddGalleryUrl} className="rounded-2xl border border-[#4A3523]/20 bg-white p-6">
            <h2 className="text-xl font-black text-[#2D1D12]">Add Gallery Image URL</h2>
            <div className="mt-4 space-y-3">
              <input value={galleryUrl} onChange={(event) => setGalleryUrl(event.target.value)} placeholder="https://..." className="w-full rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
            </div>
            <button type="submit" className="mt-4 rounded-lg bg-[#3E2719] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F7ECDB]">Add Image URL</button>
          </form>
        </div>

        {user.role === 'superadmin' && (
          <form onSubmit={onCreateUser} className="rounded-2xl border border-[#4A3523]/20 bg-white p-6">
            <h2 className="text-2xl font-black text-[#2D1D12]">Superadmin: Create Admin User</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <input value={newUsername} onChange={(event) => setNewUsername(event.target.value)} placeholder="Username" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="Password" className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2" />
              <select value={newRole} onChange={(event) => setNewRole(event.target.value as Role)} className="rounded-lg border border-[#4A3523]/20 bg-[#FFF9F0] px-3 py-2">
                <option value="admin">admin</option>
                <option value="superadmin">superadmin</option>
              </select>
            </div>
            <button type="submit" className="mt-4 rounded-lg bg-[#3E2719] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F7ECDB]">Create User</button>

            <div className="mt-5 rounded-xl bg-[#FFF9F0] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8D5D33]">Existing Admin Users</p>
              <ul className="mt-2 space-y-1 text-sm text-[#3A281A]">
                {users.map((entry) => (
                  <li key={entry.username}>{entry.username} ({entry.role})</li>
                ))}
              </ul>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}

export default AdminPage
