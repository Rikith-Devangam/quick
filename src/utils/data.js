// Create a context for all images in the assets folder
const images = require.context('../assets', false, /\.(svg|png|jpe?g)$/);

const getImage = (name) => images(`./${name}`);

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

// Now you can define your priorities and status arrays
export const priorities = [
    { title: "no priority", color: "gray", icon: <img src={getImage('No-priority.svg')} alt="No priority" /> },
    { title: "low", color: "lightgray", icon: <img src={getImage('Img - Low Priority.svg')} alt="Low priority" /> },
    { title: "medium", color: "gray", icon: <img src={getImage('Img - Medium Priority.svg')} alt="Medium priority" /> },
    { title: "high", color: "black", icon: <img src={getImage('Img - High Priority.svg')} alt="High priority" /> },
    { title: "urgent", color: "orange", icon: <img src={getImage('SVG - Urgent Priority colour.svg')} alt="Urgent priority" /> }
];

export const status = [
    { title: "backlog", color: "black", icon: <img src={getImage('Backlog.svg')} alt="Backlog" /> },
    { title: "todo", color: "lightgrey", icon: <img src={getImage('To-do.svg')} alt="To-do" /> },
    { title: "in progress", color: "#EBCB62", icon: <img src={getImage('in-progress.svg')} alt="In progress" /> },
    { title: "done", color: "#606ACB", icon: <img src={getImage('Done.svg')} alt="Done" /> },
    { title: "cancelled", color: "gray", icon: <img src={getImage('Cancelled.svg')} alt="Cancelled" /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <img src={getImage('Backlog.svg')} alt="Backlog" />,
    },
    todo: {
        color: "lightgrey",
        icon: <img src={getImage('To-do.svg')} alt="To-do" />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <img src={getImage('in-progress.svg')} alt="In progress" />,
    },
    done: {
        color: "#606ACB",
        icon: <img src={getImage('Done.svg')} alt="Done" />,
    },
    cancelled: {
        color: "gray",
        icon: <img src={getImage('Cancelled.svg')} alt="Cancelled" />,
    },
};

export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};
