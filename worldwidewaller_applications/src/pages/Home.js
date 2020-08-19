import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>World Wide Waller Applications</h1>  
      <p>
        <a 
          href="http://precision2health-demo.s3-website-us-west-2.amazonaws.com/"
          target="__"
        >
          Precision2Health Demo Site
        </a>
      </p>
      {/*
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum orci orci, in blandit lorem egestas non. Proin convallis dolor at ante rutrum ultricies. Maecenas vel lorem euismod, efficitur mauris ut, consectetur justo. Nullam nec vestibulum quam. Morbi ullamcorper vitae lacus eget varius. Aenean condimentum luctus nisl id mollis. In hac habitasse platea dictumst. Aliquam erat volutpat. Pellentesque sit amet lorem venenatis, dapibus ante nec, dapibus lacus. Aliquam ultricies, nibh a vestibulum aliquam, tortor mi pretium leo, at volutpat augue massa eget nunc. Quisque ullamcorper vestibulum pharetra. Nulla ultricies et felis varius hendrerit. Morbi sed urna vestibulum, egestas arcu nec, dapibus quam.<br /><br />
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut ante laoreet, mollis erat ac, vehicula nunc. Suspendisse tortor eros, vehicula eget finibus malesuada, condimentum vel urna. Curabitur vitae elementum nunc. Praesent sem felis, iaculis at ex id, aliquet volutpat quam. Donec gravida quis velit et bibendum. Curabitur tincidunt semper sagittis.<br /><br />
        In sapien erat, placerat non sapien eu, semper fermentum quam. In sed eros vitae arcu pellentesque bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus nec ullamcorper ante. Proin metus tortor, gravida non rhoncus id, gravida at ipsum. Duis egestas suscipit facilisis. Aliquam eu ligula sit amet eros bibendum feugiat nec at dolor. Fusce nec urna molestie, lobortis elit non, finibus ex. Duis vel elit sapien.<br /><br />
        Sed ligula mi, facilisis a elit sed, tempor scelerisque nulla. Integer quis justo vehicula, tincidunt odio quis, maximus metus. Nam mollis accumsan nisi, sed lobortis elit bibendum vel. Vivamus a pellentesque lectus. Vivamus nec ipsum quis nisl tincidunt efficitur. In ut tortor non metus molestie tempus. Vestibulum finibus ipsum quis magna egestas rutrum. Sed dapibus luctus leo quis mattis.<br /><br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec volutpat ullamcorper neque at cursus. Aliquam vitae nisi ac urna egestas porttitor in quis nunc. Pellentesque et vulputate felis. Sed orci nisi, tempus id arcu ac, faucibus semper libero. Cras faucibus euismod molestie. Nulla sed fermentum tellus. Aliquam enim felis, interdum quis elementum ac, porta et dolor. Sed at nisi in sem venenatis viverra eu sed nulla. Aliquam gravida metus ac dignissim accumsan. Curabitur commodo luctus enim, quis convallis dui vestibulum sed. Quisque sit amet nisl ac ex rhoncus vulputate id eu lorem.<br /><br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum orci orci, in blandit lorem egestas non. Proin convallis dolor at ante rutrum ultricies. Maecenas vel lorem euismod, efficitur mauris ut, consectetur justo. Nullam nec vestibulum quam. Morbi ullamcorper vitae lacus eget varius. Aenean condimentum luctus nisl id mollis. In hac habitasse platea dictumst. Aliquam erat volutpat. Pellentesque sit amet lorem venenatis, dapibus ante nec, dapibus lacus. Aliquam ultricies, nibh a vestibulum aliquam, tortor mi pretium leo, at volutpat augue massa eget nunc. Quisque ullamcorper vestibulum pharetra. Nulla ultricies et felis varius hendrerit. Morbi sed urna vestibulum, egestas arcu nec, dapibus quam.<br /><br />
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut ante laoreet, mollis erat ac, vehicula nunc. Suspendisse tortor eros, vehicula eget finibus malesuada, condimentum vel urna. Curabitur vitae elementum nunc. Praesent sem felis, iaculis at ex id, aliquet volutpat quam. Donec gravida quis velit et bibendum. Curabitur tincidunt semper sagittis.<br /><br />
        In sapien erat, placerat non sapien eu, semper fermentum quam. In sed eros vitae arcu pellentesque bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus nec ullamcorper ante. Proin metus tortor, gravida non rhoncus id, gravida at ipsum. Duis egestas suscipit facilisis. Aliquam eu ligula sit amet eros bibendum feugiat nec at dolor. Fusce nec urna molestie, lobortis elit non, finibus ex. Duis vel elit sapien.<br /><br />
        Sed ligula mi, facilisis a elit sed, tempor scelerisque nulla. Integer quis justo vehicula, tincidunt odio quis, maximus metus. Nam mollis accumsan nisi, sed lobortis elit bibendum vel. Vivamus a pellentesque lectus. Vivamus nec ipsum quis nisl tincidunt efficitur. In ut tortor non metus molestie tempus. Vestibulum finibus ipsum quis magna egestas rutrum. Sed dapibus luctus leo quis mattis.<br /><br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec volutpat ullamcorper neque at cursus. Aliquam vitae nisi ac urna egestas porttitor in quis nunc. Pellentesque et vulputate felis. Sed orci nisi, tempus id arcu ac, faucibus semper libero. Cras faucibus euismod molestie. Nulla sed fermentum tellus. Aliquam enim felis, interdum quis elementum ac, porta et dolor. Sed at nisi in sem venenatis viverra eu sed nulla. Aliquam gravida metus ac dignissim accumsan. Curabitur commodo luctus enim, quis convallis dui vestibulum sed. Quisque sit amet nisl ac ex rhoncus vulputate id eu lorem.<br /><br />
      </div>
      */}
    </Layout>
  );
};

export default Home;