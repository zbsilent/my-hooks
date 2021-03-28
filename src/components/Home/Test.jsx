import React  from 'react';

class TestRouters extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>hello word</div>
        );
    }
}

export default TestRouters;
