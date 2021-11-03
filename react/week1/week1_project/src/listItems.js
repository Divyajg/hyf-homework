function ListItems(props) {
    return ( <
        h3 > Todo: { props.listItem } <
        br / >
        DeadLine: { props.deadline } <
        /h3>
    );
}

export default ListItems;