import React,{Component} from 'react'
class Welcome extends Component {
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You have submitted correctly");
    }
    render(){
        return(
            <div>
            
            <marquee width="60%" direction="right" height="100px">
            <h1>LICT INTERN MANAGEMENT</h1>
            </marquee>
            <form onSubmit={this.mySubmitHandler}>
            
            <p>Enter your Id:</p>
            <input
              type="text"
            />
            

            


            <p>Enter Password:</p>
            <input type ="password" />
<p>
            <input
        type='submit'
        />
        </p>
            
          </form>


            {this.props.children}
            </div>
        )
    }

}
export default Welcome
