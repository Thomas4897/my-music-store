import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ProductDisplay = (props) => {
  const {
    product: { id, title, description, brand, price, image },
  } = props;

  return (
    <Card>
      <CardHeader
        action={<Typography fontWeight="bold">${price / 100}</Typography>}
        title={title}
        subheader={brand}
      />
      <CardMedia component="img" height="300" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button variant="outlined" startIcon={<AddIcon />}>
            ADD TO CART
          </Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductDisplay;
