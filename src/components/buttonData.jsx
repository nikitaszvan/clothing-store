import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const buttonData = [
    { label: "SE SEFOAM", icon: <TrackChangesIcon fontSize="large" />, href: "/"},
    { label: "PRODUCTS", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/" },
    { label: "BRANDS", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/"  },
    { label: "ON SALE", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/" },
    { label: "ACCESSORIES", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/" },
    { label: "LOOKBOOK", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/"},
    { label: "SIGN IN", icon: <Person2Icon fontSize="large"/>, href: "/"},
    { label: "FAVORITES", icon: <FavoriteIcon fontSize="large"/>, href: "/"},
    { label: "CART", icon: <ShoppingCartIcon />, href: "/"}

  ];

export default buttonData;

