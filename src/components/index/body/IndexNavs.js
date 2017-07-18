import React from 'react';

class IndexNavs extends React.Component{

    getNav=()=>{
        const {panels}=this.props;
        return React.Children.map(panels,function(child){
            if(!child) return;
            let events={};
            events.onClick=this.props.onNavClick.bind(this,child.props.code);
            debugger;
            let classes='nav-item';
            classes +=child.props.active?' isActive':'';

            return(
                <li
                    className={classes}
                    {...events}
                >
                {child.props.navName}
                </li>
            )

        }.bind(this))
    }
    render(){
        return(
            <ul className="navs">
                {this.getNav()}
            </ul>
        )
    }
}


export default IndexNavs;