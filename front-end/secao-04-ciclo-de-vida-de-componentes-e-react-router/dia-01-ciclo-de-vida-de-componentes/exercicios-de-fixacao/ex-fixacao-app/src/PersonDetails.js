import React, { Component } from "react";
import Loading from "./Loading";
import PersonCard from "./PersonCard";

class PersonDetails extends Component {

    state = {
        person: [],
        loading: true,
    };

    fetchPerson() {
        const URL = 'https://api.randomuser.me/';
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    person: data.results,
                    loading: false,
                })
            })
    };

    getUserElements(user) {
        return {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          age: user.dob.age,
          image: user.picture.large,
        };
      }

    componentDidMount() {
        this.fetchPerson();
    };

    shouldComponentUpdate(_nextProps, nextState) {
        console.log(nextState.person[0].dob.age);
        const maxAge = 50;
        if (nextState.person[0].dob.age < maxAge) return true;
    };

    render() {
        const { loading, person } = this.state;
        if (loading) return <Loading />;

        return (
            <div>
                <PersonCard 
                    person={ this.getUserElements(person[0]) }
                />
            </div>
        )
    }
}

export default PersonDetails;