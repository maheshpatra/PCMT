import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import Header from '../../components/Header'

const Aboutus = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const menuClick = () => {
    setShow(!show)

  }
  return (
    <View style={styles.container}>
     <Header navigation={navigation} />
      <View style={styles.textwraper}>
        <Text style={styles.desc}>
          Smart IQ Academy is a beacon of educational excellence, dedicated to nurturing bright minds and fostering a love for learning. Our commitment to empowering students with the knowledge, skills, and character traits essential for success in today's rapidly evolving world is unwavering.{"\n"}{"\n"}
          At Smart IQ, we believe in personalized learning that goes beyond the textbooks, encouraging students to think critically, solve problems creatively, and embrace their individuality. Our passionate educators are not just teachers but mentors who inspire and guide students on their academic journey.{"\n"}{"\n"}
          We offer a diverse range of courses, from STEM subjects to the arts, ensuring that each student can explore their interests and maximize their potential. Our state-of-the-art facilities and innovative teaching methods create an engaging and supportive environment that promotes academic excellence and personal growth.{"\n"}{"\n"}
          Join us at Smart IQ Academy and embark on a transformative educational experience that prepares you to excel in academics and life. Discover your full potential with us.
        </Text>
      </View>
    </View>

  )
}

export default Aboutus