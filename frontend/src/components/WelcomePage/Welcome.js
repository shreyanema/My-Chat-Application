import SideBar from "../SideBar/SideBar"; 
import { useState,useEffect } from "react";
import Chatbox from "../ChatBox/ChatBox";     
import {Segment,Dimmer,Loader,Item,Tab,Card,Button,Icon,Grid,Divider } from 'semantic-ui-react';
//import { useSession } from '../Authentication/Session'
//const { setSession, clearSession, user } = useSession();
const panes = [
    { menuItem: 'My Friends', render: () =>
        <Segment>
        <Grid columns={2} relaxed='very'>I am delighted to extend a heartfelt invitation to you for my sister's upcoming wedding. Your presence would add immense joy to this special occasion. Please join us in marking this significant moment in our lives !!.
        <Grid.Column width={8}>
            <SideBar></SideBar>   
        </Grid.Column>
        <Grid.Column  width={8} >
            <Chatbox></Chatbox>
        </Grid.Column>
        </Grid>
        <Divider vertical><Icon name='comment outline' size='tiny' /></Divider>
        
    </Segment>
   },
    { menuItem: 'Add More Friends', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Settings', render: () => <Tab.Pane> <Item.Group divided>
    <Item >
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header as='a'>Shreya</Item.Header>
        <Item.Description>
          Add Last conversation 
        </Item.Description>
        <Item.Extra>Action</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Soumya</Item.Header>
        <Item.Description>
          Add Last conversation 
        </Item.Description>
        <Item.Extra>Action</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  </Tab.Pane> },
    { menuItem: 'Logout', render: () =>
    <Tab.Pane>
        <div>
        <Card >
        <Card.Content  >
            <Card.Header>Just to Confirm ! </Card.Header>
            <Card.Meta>Your friends are waiting for you!!</Card.Meta>
            <Card.Description>
                Are you sure you want to Logout?
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
            <Button basic color='green'>
                Yes
            </Button>
            <Button basic color='red'>
                No
            </Button>
            </div>
        </Card.Content>
        </Card>
        </div>
    </Tab.Pane> },
  ]


  
const Welcome = () => {
  
  const [loading, setloading] = useState(false);
  useEffect(() =>{
    setloading(true);
    setTimeout(() => {
      setloading(false);}, 2000);
    },[]);
    return (
      <div>
        { loading  ? 
         <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      :
     
      <Tab menu ={{ inverted: true, color:'teal'}} panes={panes} style={{
        background: '#DCEDC2'
      }}/> }
      
      </div>
      
      
        
    )
}




export default Welcome;