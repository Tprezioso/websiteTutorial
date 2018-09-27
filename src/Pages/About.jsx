import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Jumbotron from '../Components/Jumbotron';
import Slider from '../Components/Slider'



class About extends Component {
    render() {
      return (
      <div>
        <NavBar />
        {/* TO DO: add slider view*/}
        <Slider/>
        <Jumbotron title="About" subtitle="The About subsitle" />
        <div className="container">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam vitae nisi ac metus pulvinar aliquet. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Donec viverra mauris at sodales
            auctor. Nunc molestie erat sit amet quam interdum
            consequat. Donec sed sagittis lorem. Aenean leo metus,
            spharetra ac ultrices vel, dapibus sit amet mauris. Nam
            ut fermentum sem, id ornare quam. Integer hendrerit ac
            nulla eget laoreet. Aenean vitae tincidunt magna.
              </p>
          <p>
            Sed volutpat augue augue, a convallis erat efficitur in.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fringilla ligula id egestas accumsan. Nunc
            at enim ut ipsum pulvinar maximus. Integer id augue
            interdum diam aliquet euismod. Aenean magna eros,
            pretium ut euismod sit amet, laoreet eu lacus. Ut congue
            ac diam venenatis consectetur. Nullam vitae dapibus
            enim. Pellentesque nec neque sit amet dui tempor
            lacinia. Aliquam erat volutpat. Donec enim nisi, commodo
            sit amet nisi ut, dapibus sodales leo. Donec fringilla
            porta nibh vel imperdiet. Nunc viverra viverra enim in
            ullamcorper. Donec magna ipsum, porta sit amet urna ac,
            congue lacinia erat.
              </p>
        </div>
        <Footer />
          </div >);
    }
}

export default About