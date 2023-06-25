import classes from './CircleLoader.module.css';

const CircleLoader = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0'>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className={classes.circle_loader}></div>
      </div>
    </div>
  )
}

export default CircleLoader;