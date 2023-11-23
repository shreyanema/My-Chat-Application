import {Item} from 'semantic-ui-react';

const SideBar = () => {
    // Component logic
   
    return (
      <div>
        
        <Item.Group divided >
        <Item  >
          <Item.Image size='tiny' src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a' style={{color: '#FF8C94'}}>Shreya</Item.Header>
            <Item.Description>
              Add Last conversation 
            </Item.Description>
            <Item.Extra>Action</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'  style={{color: '#FF8C94'}}>Soumya</Item.Header>
            <Item.Description>
              Add Last conversation 
            </Item.Description>
            <Item.Extra>Action</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

       
      </div>
    );
  };
  
  export default SideBar;