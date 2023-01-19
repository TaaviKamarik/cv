import "./App.css"
import {Box, Card, Divider, Grid, Link, Rating} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import styled from "@emotion/styled";
import LensIcon from '@mui/icons-material/Lens';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import java from './/pictures/java.png';
import js from './/pictures/js.png';
import css from './/pictures/css.png';
import html from './/pictures/html.png';
import react from './/pictures/react.png';
import sharp from './/pictures/sharp.png';
import taavi from './/pictures/Taavi.jpg';
import Basketball from '@mui/icons-material/SportsBasketball';
import Fitness from '@mui/icons-material/FitnessCenter';
import Snowboarding from '@mui/icons-material/Snowboarding';
import Controller from '@mui/icons-material/SportsEsports';
import ThreeD from '@mui/icons-material/ThreeDRotation';


function App() {

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#467DEB',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });


  return (
    <div className="App">
      <Card style={{width: "60%", height: "auto", marginTop: "5%", paddingBottom: "10%"}}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{height: "300px", width: "100%", backgroundColor: "#467DEB", display: "flex", justifyContent: "center"}}>
                    <Box sx={{height: "300px", width: "300px",marginTop: "100px", borderRadius: "150px", outline:  "white solid 10px", overflow: "hidden"}}>
                        <img alt={""} width={"300px"} height={"300px"} src={taavi}/>
                    </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{height: "100px"}}>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                  <div className="nimi">TAAVI KAMARIK</div>
                  <div style={{fontSize: "large", display: "inline-flex", alignItems: "center", color: "grey"}}><LocalPhoneIcon/><span style={{marginLeft: "10px"}}>5662-6062</span></div>
                  <div style={{fontSize: "large", display: "inline-flex", alignItems: "center", color: "grey"}}><AlternateEmailIcon/><span style={{marginLeft: "10px"}}>taavi.kamarik@gmail.com</span></div>

              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
                  <Box sx={{width: "80%", marginBottom: "50px"}}>
                      <Divider>HARIDUS</Divider>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "75%"}}>
                      <Box component="span" sx={{fontWeight: "700", color: "#467DEB"}}>Tallinna Ülikool</Box>
                      <Box component="span" sx={{color: "grey", marginLeft: "20px", fontSize: "medium"}}>(2021-...)</Box>
                      <Box sx={{fontSize: "medium"}}>Õpin Tallinna Ülikoolis Informaatika erialal. Spetsialiseerumiseks valisin digitaalse meedia suuna. Hetkel on käsil teine õppeaasta. Lõpetan 2024. aastal.</Box>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "75%"}}>
                      <Box component="span" sx={{fontWeight: "700", color: "#467DEB"}}>Pärnu Ühisgümnaasium</Box>
                      <Box component="span" sx={{color: "grey", marginLeft: "20px", fontSize: "medium"}}></Box>
                      <Box sx={{fontSize: "medium"}}>Õppisin inglise keele kallakuga klassis.</Box>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
                  <Box sx={{width: "80%", marginBottom: "50px"}}>
                      <Divider>TÖÖKOGEMUS</Divider>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "75%"}}>
                      <Box component="span" sx={{fontWeight: "700", color: "#467DEB"}}>Tallinna Ülikool</Box>
                      <Box component="span" sx={{fontWeight: "700", marginLeft: "20px", fontSize: "medium"}}>Front-end arendaja</Box>
                      <Box component="span" sx={{color: "grey", marginLeft: "20px", fontSize: "medium"}}>(2022-...)</Box>
                      <Box sx={{fontSize: "medium"}}>Arendan eesti keele arendamise töörühmas ELLE keeleõppe tööriista. Peamiseks tööülesandeks on front-endi arendamine vastavalt disainidokumentidele. Lisaks tegelen ka olemasolevate bugide parandmisega tööriistades. Töökoormus on 0,3.</Box>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "75%"}}>
                      <Box component="span" sx={{fontWeight: "700", color: "#467DEB"}}>Hotas OÜ</Box>
                      <Box component="span" sx={{fontWeight: "700", marginLeft: "20px", fontSize: "medium"}}>Subtiitrite tõlkija</Box>
                      <Box component="span" sx={{color: "grey", marginLeft: "20px", fontSize: "medium"}}>(2019-...)</Box>
                      <Box sx={{fontSize: "medium"}}>Filmidele ja serjaalidele subtiitrite ajastamine ja tõlkimine inglise- ja saksa keelest. Töötan vabakutselisena teges koostööd erinevate ettevõtetega. </Box>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
                  <Box sx={{width: "80%", marginBottom: "50px"}}>
                      <Divider>OSKUSED</Divider>
                  </Box>
              </Grid>
              <Grid item xs={6} sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                  <Box sx={{display: "inline-flex", alignItems: "center", marginLeft: "25%"}}>
                      <Box component="span" sx={{width: "40px", height: "40px"}}> <img alt={""} width={"40px"} height={"40px"} src={js}/></Box>
                      <Box component="span" sx={{width: "150px", fontWeight: "400", marginLeft: "20px", fontSize: "large"}}>JavaScript</Box>
                      <StyledRating name="read-only" value="4" icon={<LensIcon fontSize="inherit"/>} emptyIcon={<PanoramaFishEyeIcon fontSize="inherit"/>} readOnly />

                  </Box>
                  <Box sx={{display: "inline-flex", alignItems: "center", marginLeft: "25%", marginTop: "20px"}}>
                      <Box component="span" sx={{width: "40px", height: "40px"}}> <img alt={""} width={"40px"} height={"40px"} src={java}/></Box>
                      <Box component="span" sx={{width: "150px", fontWeight: "400", marginLeft: "20px", fontSize: "large"}}>JAVA</Box>
                      <StyledRating name="read-only" value="3" icon={<LensIcon fontSize="inherit"/>} emptyIcon={<PanoramaFishEyeIcon fontSize="inherit"/>} readOnly />

                  </Box>
                  <Box sx={{display: "inline-flex", alignItems: "center", marginLeft: "25%", marginTop: "20px"}}>
                      <Box component="span" sx={{width: "40px", height: "40px"}}> <img alt={""} width={"40px"} height={"40px"} src={css}/></Box>
                      <Box component="span" sx={{width: "150px", fontWeight: "400", marginLeft: "20px", fontSize: "large"}}>CSS</Box>
                      <StyledRating name="read-only" value="5" icon={<LensIcon fontSize="inherit"/>} emptyIcon={<PanoramaFishEyeIcon fontSize="inherit"/>} readOnly />

                  </Box>
              </Grid>
              <Divider orientation="vertical" flexItem>
              </Divider>
              <Grid item xs={5} sx={{display: "flex", justifyContent: "start", flexDirection: "column"}}>
                  <Box sx={{display: "inline-flex", alignItems: "center" , marginLeft: "25%"}}>
                      <Box component="span" sx={{width: "40px", height: "40px"}}> <img alt={""} width={"40px"} height={"40px"} src={html}/></Box>
                      <Box component="span" sx={{width: "100px", fontWeight: "400", marginLeft: "20px", fontSize: "large"}}>HTML</Box>
                      <StyledRating name="read-only" value="4" icon={<LensIcon fontSize="inherit"/>} emptyIcon={<PanoramaFishEyeIcon fontSize="inherit"/>} readOnly />

                  </Box>
                  <Box sx={{display: "inline-flex", alignItems: "center", marginTop: "20px", marginLeft: "25%"}}>
                      <Box component="span" sx={{width: "40px", height: "40px"}}> <img alt={""} width={"40px"} height={"40px"} src={react}/></Box>
                      <Box component="span" sx={{width: "100px", fontWeight: "400", marginLeft: "20px", fontSize: "large"}}>React</Box>
                      <StyledRating name="read-only" value="5" icon={<LensIcon fontSize="inherit"/>} emptyIcon={<PanoramaFishEyeIcon fontSize="inherit"/>} readOnly />

                  </Box>
                  <Box sx={{display: "inline-flex", alignItems: "center", marginTop: "20px", marginLeft: "25%"}}>
                      <Box component="span" sx={{width: "40px", height: "40px"}}> <img alt={""} width={"40px"} height={"40px"} src={sharp}/></Box>
                      <Box component="span" sx={{width: "100px", fontWeight: "400", marginLeft: "20px", fontSize: "large"}}>C#</Box>
                      <StyledRating name="read-only" value="2" icon={<LensIcon fontSize="inherit"/>} emptyIcon={<PanoramaFishEyeIcon fontSize="inherit"/>} readOnly />

                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
                  <Box sx={{width: "80%", marginBottom: "50px"}}>
                      <Divider>KOOLITUSED</Divider>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "75%"}}>
                      <Box component="span" sx={{fontWeight: "700", color: "#467DEB"}}>SDAcademy</Box>
                      <Box component="span" sx={{fontWeight: "700", marginLeft: "20px", fontSize: "medium"}}>JAVA koolitus</Box>
                      <Box component="span" sx={{color: "grey", marginLeft: "20px", fontSize: "medium"}}>(2019)</Box>
                      <Box sx={{fontSize: "medium"}}>Põhjalik JAVA koolitus, mille lõpus sai koostatud projekt Angluari ja Javaga. Koolituse maht oli 400 akadeemilist tundi.</Box>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
                  <Box sx={{width: "80%", marginBottom: "50px"}}>
                      <Divider>GIT</Divider>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "75%"}}>
                      <Box component="span" sx={{fontWeight: "700", color: "#467DEB"}}>Github:</Box>
                      <Box component="span" sx={{fontWeight: "400", marginLeft: "20px", fontSize: "medium"}}><Link target="_blank" href="https://github.com/TaaviKamarik">https://github.com/TaaviKamarik</Link></Box>
                     </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
                  <Box sx={{width: "80%", marginBottom: "50px"}}>
                      <Divider>HOBID</Divider>
                  </Box>
              </Grid>
              <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{width: "70%", fontSize: "xxx-large", display: "flex", justifyContent: "space-between"}}>
                      <Basketball fontSize={"inherit"}/>
                      <Controller fontSize={"inherit"}/>
                      <Fitness fontSize={"inherit"}/>
                      <Snowboarding fontSize={"inherit"}/>
                      <ThreeD fontSize={"inherit"}/>

                  </Box>
              </Grid>
              <Grid item xs={12}>


              </Grid>
          </Grid>

      </Card>
    </div>
  );
}

export default App;
