import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        //minHeight: "40vh",
        margin: "0px auto",
        maxWidth: "50%",
        position: "relative"
    },
    quote: {
        textAlign: "center",
        padding: "0.5em",
        marginTop: "1em",
        //trying to ease out text on change but don't think this works
        opacity: 1,
        transition: "opacity 1s ease-in"
    },
    author: {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "20px"
    },
    
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 0
    },
    twitter: {
        margin: 20,
        cursor: "pointer"
    },

    btn: {
        margin: 10
    }
  });


function CardContainer(props){
    console.log("this is card props", props);
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

  
    async function getQuote(){
        let response = await fetch("https://api.quotable.io/random");
        console.log("response is ", response);
        let data = await response.json();
        let newQuote = data.content;
        let newAuthor = data.author;
        setQuote(newQuote);
        setAuthor(newAuthor);
        
        
        
    }
   
    //useEffect calls getQuote on page first load
   useEffect(() => {
        return getQuote();

    }, [])
  
   function handleClick(){
        getQuote();
       console.log("index is", props.index)
       if(props.index !== props.maxIndex){
           props.setColor(props.colorsArray[props.index + 1])
       }else{
           props.setColor(props.colorsArray[0])
       }
       
   }
    
    
    return (
        <Card className={classes.root} id="quote-box">
            <CardContent>
                <Typography className={classes.quote} variant="h5" component="h2" id="text" gutterBottom>
                    {quote}
                </Typography>
                <div className={classes.author}>
                <Typography color="textSecondary" id="author">
                    {author}
                </Typography>
                </div>
            </CardContent>
            <div className={classes.footer}>
                <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
                    <TwitterIcon size="medium" className={classes.twitter}/>
                </a>
                <CardActions className={classes.btnPosition}>
                    <Button onClick={handleClick} className={classes.btn} size="small" variant="outlined" id="new-quote">Get Quote</Button>
                </CardActions>
            </div>
        </Card>
  );
}
    


export default CardContainer;