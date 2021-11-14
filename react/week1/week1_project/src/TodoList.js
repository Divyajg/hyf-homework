import data from './data.json'
import ListItems from './listItems'

function todoList() {
    return ( <div> {
                data.todoList.map((item) => {
                        return ( <
                            ListItems key = { item.Deadline }
                            listItem = { item.Description }
                            deadline = { item.Deadline }
                            />);
                        })
                } </div>)
            }
            export default todoList;