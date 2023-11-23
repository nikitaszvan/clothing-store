import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const buttonData = [
    { icon: <TrackChangesIcon />, href: "/", title: "HOME"},
    { label: "PRODUCTS", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/products" },
    { label: "BRANDS", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/"  },
    { label: "ON SALE", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/" },
    { label: "ACCESSORIES", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/" },
    { label: "LOOKBOOK", subItems: [{label: "Item 1", href: "/"}, {label: "Item 2", href: "/"}, {label: "Item 3", href: "/"}], href: "/"},
    { icon: <SearchIcon />, href: "/", title: "SEARCH"},
    { icon: <Person2Icon />, href: "/", title: "SIGN IN"},
    { icon: <FavoriteIcon />, href: "/", title: "FAVORITES"},
    { icon: <ShoppingCartIcon />, href: "/", title: "CART"}

  ];

export default buttonData;

