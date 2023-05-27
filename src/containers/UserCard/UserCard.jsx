import { CardMedia, Stack } from "@mui/material"
import Grid from '@mui/material/Grid'
import PrincipalInformation from "../../components/PrincipalInformation/PrincipalInformation"
import Description from "../Description/Description"

const UserCard = (props) => {
const {userState} = props 
const {avatar_url} = userState

  return (
    <Grid 
    container 
    spacing={2}
    sx={{marginTop: '15px'}}>
        <Grid item xs={3}>
         <CardMedia
            component='img'
            alt='Github User'
            image={avatar_url}
            sx={{
              borderRadius: '50%',
              marginLeft: '5px'
            }}
            />
        </Grid>
        <Grid item xs={9}>
         <Stack
          direction="column"
          spacing={1}
          sx={{margin: '30px'}}>
         <PrincipalInformation userState={userState}/>
          <Description userState={userState}/>
         </Stack>
        </Grid>
    </Grid>
  )
}
export default UserCard