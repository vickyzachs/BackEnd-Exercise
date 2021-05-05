import { Component } from "react";

class ListStudent extends Component{
    state = {
        subTitle: "Welcome",
    };
    
    handleChange = () => {
        this.setState({subTitle: "Selamat Datang"});
    };

    componentDidMount(){
        console.log("Component Did Mount Dijalankan");
    };

    componentDidUpdate(){
        console.log("Component Did Update dijalankan");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount dijalankan");
    }

    render() {
        console.log("render dijalankan");
        const {title, students} = this.props;
        return(
        <div>
        <h1>{title}</h1>
        <p>{this.state.subTitle}</p>
       <ul>
         {
           students.map(student => {
             return <li>{student.name}</li>;
           })
         }
       </ul>
       <button onClick={this.handleChange}>
           Change Subtitle</button>
       </div>
        )
    }
}

export default ListStudent;