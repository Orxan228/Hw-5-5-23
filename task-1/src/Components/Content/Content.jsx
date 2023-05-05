import React from 'react'
import "./Content.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Content = () => {
  return (
    <div className='Content'>
      <div className="Content___left">
        <p className='Content___left--p1'>From the firehose</p>
        <h2>Sample blog post</h2>
        <p><i>April 1, 2020 by <a href="#">Olivier</a></i></p>
        <p>This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.</p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <p>Curabitur blandit tempus porttitor. <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>  
        <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <h4>Heading</h4>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Sub-heading 1</p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <p>Sub-heading 2</p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
          <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
        </ol>
        <h2>Another blog post</h2>
        <p><i>March 23, 2020 by <a href="#">Matt</a></i></p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <p>Curabitur blandit tempus porttitor. <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <h2>New feature</h2>
        <p><i>March 14, 2020 by <a href="#">Tom</a></i></p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
      </div>
      <div className="Content___right">
        <div className="Content___right___about">
          <p className='Content___right___about--p1'>About</p>
          <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
        <div className="Content___right___archives">
          <p className='Content___right___archives--p1'>Archives</p>
          <ul>
            <li><a href="#">March 2020</a></li>
            <li><a href="#">February 2020</a></li>
            <li><a href="#">January 2020</a></li>
            <li><a href="#">November 1999</a></li>
            <li><a href="#">October 1999</a></li>
            <li><a href="#">September 1999</a></li>
            <li><a href="#">August 1999</a></li>
            <li><a href="#">July 1999</a></li>
            <li><a href="#">June 1999</a></li>
            <li><a href="#">May 1999</a></li>
            <li><a href="#">April 1999</a></li>
          </ul>
        </div>
        <div className="Content___right___social">
          <p className='Content___right___social--p1'>Social</p>
          <div className="Content___right___social--git">
            <GitHubIcon/> <a href="#">Github</a>
          </div>
          <div className="Content___right___social--twitter">
            <TwitterIcon/> <a href="#">Twitter</a>
          </div>
          <div className="Content___right___social--facebook">
          <FacebookIcon/> <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
