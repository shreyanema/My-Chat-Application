import {Form,Comment,Header,Container} from 'semantic-ui-react';

const ChatBox = () => {
  // Component logic

  return (
    <div>
    
      <Container>
        <Comment.Group>
        <Header as='h3' dividing color='teal'>
        ChatBox Messages
        </Header>

        <Comment>
        <Comment.Avatar src='/images/avatar/small/matt.jpg' />
        <Comment.Content>
            <Comment.Author as='a' style = {{color: '#FF8C94'}}>Matt</Comment.Author>
            <Comment.Metadata>
            <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        </Comment>

        <Comment>
        <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
        <Comment.Content>
            <Comment.Author as='a' style = {{color: '#FF8C94'}}>Elliot Fu</Comment.Author>
            <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
            <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
            <Comment>
            <Comment.Avatar src='/images/avatar/small/jenny.jpg' />
            <Comment.Content>
                <Comment.Author as='a' style = {{color: '#FF8C94'}}>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            </Comment>
        </Comment.Group>
        </Comment>

        <Comment>
        <Comment.Avatar src='/images/avatar/small/joe.jpg' />
        <Comment.Content>
            <Comment.Author as='a' style = {{color: '#FF8C94'}}>Joe Henderson</Comment.Author>
            <Comment.Metadata>
            <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        </Comment>

       
    </Comment.Group>
    <Form>
        <Form.TextArea label ="Your Message" placeholder = "Type Your Message"></Form.TextArea>
        <Form.Button>Submit</Form.Button>
    </Form>
      </Container>  
     

  </div>
  );
};

export default ChatBox;