//İlk constructor --> state in ilk durumu
//render metodu ilk defa çalıştı
//onClick eventi ilk defa çalıştı
//setState state nesnesini güncelledi --> triggered render
//render metodu güncel JSX i sayfada gösteriyor

import React from 'react';


class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            showContent: false
        }

    }



    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
    }

  /*  componentDidMount(){
        console.log('component oluşturuldu')
    }
    componentDidUpdate() {
        console.log('component güncellendi')
    }*/


    render() {
        return (
            <div>

                <button className="btn btn-primary w-100 " onClick={this.showMore}>
                    {/*this.props.children.props.cardTitle*/}
                    {React.Children.map(this.props.children, children=> children.props.cardTitle)}
                    </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show" >
                            {/*{this.props.children}*/}
                            {React.Children.map(this.props.children, children=> children)}
                        </div>
                    ) : null
                }


            </div>

        );
    }



};

export default Collapse;