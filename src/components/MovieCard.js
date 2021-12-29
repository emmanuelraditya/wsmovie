import React from "react";
// import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

function BookCard({ classes,book,handleFavorite }) {
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image=
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
           {book.book_details[0].title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
           {book.book_details[0].description}
          </Typography>
          <Divider className={classes.divider} light />
         <FavoriteIcon sx={{}} onClick={handleFavorite} />
          {/* {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))} */}
        </CardContent>
      </Card>
    </div>
  );
}

const WrappedApp = withStyles(styles)(BookCard);

export default WrappedApp;


