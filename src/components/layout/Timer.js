// import React, { Component } from 'react';

// class Timer extends Component {
//   state = {
//     count: null,
//   };
//   componentDidMount() {
//     const { startCount, handleTimer, isClicked } = this.props;
//     this.setState({ count: startCount });

//     const timer = setInterval(() => {
//       const cnt = this.state.count;
//       this.setState({ count: cnt - 1 });
//     }, 1000);

//     // const check = setInterval(() => {
//     //   if (this.state.count <= 0 || isClicked) {
//     //     clearInterval(timer);
//     //     handleTimer();
//     //     this.setState({ count: startCount });
//     //   }
//     // }, 1000);
//   }

//   // componentWillReceiveProps(nextProps) {
//   //   const { startCount, handleTimer, isClicked } = nextProps;

//   //   this.setState({ count: startCount });
//   //   const timer = setInterval(() => {
//   //     const cnt = this.state.count;
//   //     this.setState({ count: cnt - 1 });
//   //   }, 1000);

//   //   // const check = setInterval(() => {
//   //   //   if (this.state.count <= 0 || isClicked) {
//   //   //     clearInterval(timer);
//   //   //     handleTimer();
//   //   //     this.setState({ count: startCount });
//   //   //   }
//   //   // }, 1000);
//   // }
//   render() {
//     const { count } = this.state;
//     // const { handleTimer } = this.props;

//     return (
//       <div>
//         <h2>Countdown : {count} s</h2>
//       </div>
//     );
//   }
// }

// export default Timer;
