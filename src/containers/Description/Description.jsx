import { Stack, Typography } from "@mui/material"
import PaperInformation from "../../components/PaperInformation/PaperInformation"
import LocationInformation from "../../components/LocationInformation/LocationInformation"

const Description = (props) => {
  const { userState } = props
  const { bio } = userState
  
    return (
    <>
    <Stack sx={{justifyConten: 'center'}}>
        {bio !== null
        ?<Typography variant='body1'>{bio}</Typography>
        :<Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi officiis?</Typography>
        }
    </Stack>
    <PaperInformation userState={userState}/>
    <LocationInformation userState={userState}/>
    
    </>

    
  )
}
export default Description