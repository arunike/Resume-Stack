import { LogoGithub, LogoGmail, LogoJuejin, LogoLinkedin } from '@/components/common/svg-icons'
import { Cake, Globe, Link, Mail, MapPin, Phone } from 'lucide-react'

export function LinkIconComponent(icon: string) {
  const props = { width: '1em', height: '1em' }
  switch (icon) {
    case 'link':
      return <Link {...props} />
    case 'website':
      return <Globe {...props} />
    case 'location':
      return <MapPin {...props} />
    case 'cake':
      return <Cake {...props} />
    case 'phone':
      return <Phone {...props} />
    case 'github':
      return <LogoGithub {...props} />
    case 'juejin':
      return <LogoJuejin {...props} />
    case 'mail':
      return <Mail {...props} />
    case 'gmail':
      return <LogoGmail {...props} />
    case 'linkedin':
      return <LogoLinkedin {...props} />
    default:
      return <Link {...props} />
  }
}
