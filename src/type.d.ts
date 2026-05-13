export type Props = {
  id: number
  name: string
  email: string
  active: boolean
  role: 'User' | 'Admin' | 'Editor'
}