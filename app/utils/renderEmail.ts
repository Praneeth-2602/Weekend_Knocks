import { render } from '@react-email/components';
import {ReactElement} from "react"
const renderEmail = async (component: ReactElement  ) =>{
    const emailHtml = await render(component)
    return emailHtml
}
export default renderEmail