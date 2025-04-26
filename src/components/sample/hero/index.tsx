import style from './style.module.css'

const SampleHero = () => {
  return (
    <section className={`square__bg center ${style.section}`}>
      <div style={{ height: '100%' }}>
        <h1 className={style.big__title}>
          Da Sample <br />
          <span className={style.artist}>J Cole</span> vs <span className={style.artist}>Edykah Badu</span>
        </h1>
      </div>
      {/* <SampleElement videoId='isViE_8vDQk' />
      <SampleElement videoId='Np21rH7Ldto' /> */}
    </section>
  )
}

export default SampleHero