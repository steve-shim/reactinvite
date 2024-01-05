import Section from '@shared/Section'

import styles from './ImageGallery.module.scss'
import classNames from 'classnames/bind'

import ImageViewer from '../ImageViewer'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li key={idx} className={cx('wrap-image')}>
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer images={images} />
    </>
  )
}

export default ImageGallery
