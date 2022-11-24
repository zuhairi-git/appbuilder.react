export interface IAccount {
  username: string
  email: string
  language: string
  timeZone: string
  communications: {
    email: boolean
    sms: boolean
    phone: boolean
  }
  requireInfo: boolean
}

export const defaultAccount: IAccount = {
  username: 'ali',
  email: 'ali@appbuilder.cc',
  language: 'en',
  timeZone: 'Finland',
  communications: {
    email: false,
    sms: true,
    phone: false,
  },
  requireInfo: false,
}
