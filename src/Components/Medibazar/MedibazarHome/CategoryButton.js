import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
       // margin: theme.spacing(1),
        width:'200px',
        marginBottom:'10px',
      },
    },
  }));

const CategoryButton = (props) => {
    const classes = useStyles();
    const {category}=props.pro;
    console.log(category);
   
    return (
        <div className={classes.root}>
            {
                props.showAddToCart && 
                <Button  variant="outlined" onClick={()=>props.CcategoryButton(props.pro.category)}>
                {props.pro.category}
                </Button>

                
            }
          
        </div>
        
    );
};

export default CategoryButton;