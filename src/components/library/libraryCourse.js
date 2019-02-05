import React, { Component } from 'react'; 

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum, dui sed scelerisque pulvinar, purus purus iaculis lacus, eget hendrerit diam turpis vel nulla. Donec dignissim massa eget nibh venenatis rhoncus eget in felis. Duis a augue eu nisi bibendum cursus. Nam malesuada malesuada convallis. </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;