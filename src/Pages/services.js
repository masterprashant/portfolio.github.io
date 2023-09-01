import React from "react";
import { Paper } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
// import { Slide } from "react-awesome-reveal";
export default function Project(){
   var category=[ {
 
    discraption:"This is a backend project, it is dynamic and working,  .",
    image:"hero1.png",
    heating:'backebd-project'

},
{
 
    discraption:"This is a backend project, it is dynamic and working,  ",
    image:"porfolio.png",
    heating:'backebd-project'

},
{
 
    discraption:"This is a backend project, it is dynamic and working,   .",
    image:"porfolio.png",
    heating:'backebd-project'

},
{
 
    discraption:"This is a backend project, it is dynamic and working,  .",
    image:"1.png",
    heating:'backebd-project'

},



]

 
function PlayImages(){
    return category.map((item)=>{
    return(
        <div>
                        

        <Paper elevation={4} style={{width:'350px',height:'270px',borderWidth:'4px',borderColor:'#fff',display:'flex',borderStyle:'solid',margin:'10px'}}>
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',backgroundColor:'#F8F9F9 ',}}>
            <div  style={{width:'100%',height:'80%',display:'flex',justifyContent:'center',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>               
            <div style={{height:'100%',width:'100%',alignItems:'center'}}> <img src={`image/${item.image}` } style={{width:'95%',height:'150px'}} /></div>
            <div style={{fontFamily:'Popins',fontSize:'24px',fontWeight:'bold'}}>{item.heating} </div>
            <div style={{fontFamily:'popins',fontSize:'16px',fontWeight:'100',color:' #808080 ',width:'90%'}}>{item.discraption} </div>
          </div>
          </div>
        </Paper>
        
        </div>
        
        )
    })
}
return(
<div style={{ }}>
            <div style={{fontSize:'40px',fontFamily:'popins',fontWeight:'bold',marginLeft:'5%',marginTop:'1%',textAlign:'center'}}> 
                My Project
             <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> {PlayImages()}</div>
           
          
       </div>
    </div>
)

}

