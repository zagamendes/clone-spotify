/* eslint-disable no-unused-vars */
interface ExplicitContent {
    filter_enabled: boolean
    filter_locked: boolean
}
interface ExternalUrls {
    spotify: string
}
interface Followers {
    href: any
    total: number
  }

interface Image {
    height?: any
    url: string
    width?: any
  }

interface UserResponse {
    accessToken: string
    refreshToken: string
    expiresIn: number
    country: string
    display_name: string
    email: string
    explicit_content: ExplicitContent
    external_urls: ExternalUrls
    followers: Followers
    href: string
    id: string
    images: Image[]
    product: string
    type: string
    uri: string
    playlists?: any[]
  }

interface UserInfo{
      userInfo: UserResponse
      setUserInfo:(userInfo:UserResponse|null)=> void
  }

interface ExternalUrls2 {
    spotify: string
  }
interface Artist {
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
  }

interface Song {
    album_type: string
    artists: Artist[]
    available_markets?: string[]
    external_urls: ExternalUrls2
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
