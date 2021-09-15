import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container,Header,Form, Dropdown, Button, List, Input} from 'semantic-ui-react';

const ListApp = () => {
    const initialNewTask={
        color: '',
        name: '',
    }

    const [newTask, setNewTask] = React.useState(initialNewTask);
    const {name,color} = newTask;
    
    function changeNewTask(e, {name,value}){
        setNewTask({...newTask, [name]:value});
    }
    const [list,setList]=React.useState([]);


    
    const colorOptions = [
        {text:'Blue', value:'blue'},
        {text: 'Red', value:'red'},
        {text:'yellow', value:'yellow'},
    ];

    function addTask(){
        setList([...List, newTask]);
        setNewTask(initialNewTask);
    }
    return (
        <React.Fragment>
            <Container>
                <Header as='h1'>    
                    List App
                </Header>
                <Form>
                    <Form.Field
                    control={Input}
                    label='Task Name'
                    name='task'
                    value={name}
                    onChange={changeNewTask}
                    >
                        
                    </Form.Field>
                    <Dropdown
                    control={Dropdown}
                    placeholder='Select Task Color'
                    fluid
                    selection
                    selectOnBlur={false}
                    clearable
                    options={colorOptions}
                    name='color'
                    value={color}
                    onChange={changeNewTask}
                    >

                    </Dropdown>
                    <Button onClick={addTask}>
                        Add Task
                    </Button>
                </Form>
                <List>
                    {list.map(task =>{

                    })}
                </List>
            </Container>
        </React.Fragment>
    )
}
export default ListApp;
