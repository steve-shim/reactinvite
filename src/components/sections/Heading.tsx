import { parseISO, format, getDay } from 'date-fns'
import Section from '@shared/Section'

import styles from './Heading.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

// 상수는 한번만 생성되면 되니까 Heading 함수 밖에 정의한다
// Heading 함수 안에 있으면 리렌더링 될때마다 상수를 생성하는 불필요한 작업이 발생한다
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date) // string to Date

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
