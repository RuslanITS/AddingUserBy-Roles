export type Props = {
  id: string
  name: string
  email: string
  active: boolean
  role: '' | 'user' | 'admin' | 'editor'
}