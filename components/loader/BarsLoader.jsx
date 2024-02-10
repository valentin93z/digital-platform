import classes from './BarsLoader.module.css';

const BarsLoader = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0'>
      <div className='absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className={classes.bars_loader}></div>
      </div>
    </div>
  )
}

export default BarsLoader;