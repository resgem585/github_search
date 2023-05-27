import { Stack, Typography } from "@mui/material"
import { Fragment } from "react"
import { render } from "react-dom"

const PrincipalInformation = (props) => {
    const  {userState}  = props
    const {
        name,
        login,
        created_at,
    } = userState


  return (
    <Fragment>
       <Stack direction='row' sx={{justifyContent: 'space-between'}}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle">{created_at}</Typography>
        </Stack> 
        <Typography variant="caption">{`@${login}`}</Typography>
    </Fragment>
  )
}
export default PrincipalInformation