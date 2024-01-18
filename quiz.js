import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [options, setOptions] = useState([]);
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isLoading, setISLOading] = useState(false);

  const getQuiz = async () => {
    setISLOading(true);
    const url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setISLOading(false)
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const questionNumberHandler = () => {
    if (questionNumber < questions.length)
      setQuestionNumber(questionNumber + 1)
  };

  const prevHandler=()=>{
    setQues(ques-1)
    setOptions(generateOptionsAndShuffle(questions[ques - 1]))
    setQuestionNumber(questionNumber - 1)
  }

  const nextHandler = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1]))
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  };

  const handleSelectOption = (_option) => {
    if (_option === questions[ques].correct_answer) { setScore(score + 1) }

    if (ques !== 9) {
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score
    })
  }


  return (

    <View style={styles.container}>
      {isLoading ? <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10, flex: 1,
        justifyContent: 'center',
      }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
        : questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}> {questionNumber}. {decodeURIComponent(questions[ques].question)}</Text>
            </View>
            <View style={styles.options}>
              {options.map((opt, index) => {
                return <TouchableOpacity   
                style={styles.optionsContainer} key={index}
                  onPress={() => { handleSelectOption(opt); questionNumberHandler(); }}>
                  <Text style={styles.option}>
                    {decodeURIComponent(opt)}
                  </Text>
                </TouchableOpacity>
              })}
            </View>
            <View style={styles.bottom}>
              {ques !== 0 &&
                <TouchableOpacity 
                   onPress={prevHandler}
                   style={styles.button}>
                  <Text style={styles.textContainer}>
                    PREV
                  </Text>
                </TouchableOpacity>}
              {ques !== 9 &&
                <TouchableOpacity style={styles.button}
                  onPress={() => { nextHandler(); questionNumberHandler(); }}>
                  <Text style={styles.textContainer}>
                    SKIP
                  </Text>
                </TouchableOpacity>}
              {ques === 9 &&
                <TouchableOpacity style={styles.button}
                  onPress={handleShowResult}>
                  <Text style={styles.textContainer}>
                    SCORE
                  </Text>
                </TouchableOpacity>}
            </View>
          </View>
        )}
    </View>

  )
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    height: '100%',
    backgroundColor: '#023047'
  },
  top: {
    marginVertical: 16
  },
  options: {
    marginVertical: 5,
    flex: 1
  },
  bottom: {
    marginBottom: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 21,
    paddingBottom: 15
  },
  button: {
    width: 100,
    backgroundColor: '#274c77',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffecd1',
    fontStyle: 'italic',
  },
  question: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffecd1',
    paddingRight: 3

  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#ffecd1'
  },
  optionsContainer: {
    padding: 11,
    paddingLeft: 25,
    marginVertical: 12,
    backgroundColor: '#274c77',
    borderRadius: 15,
    width: 340
  },
  parent: {
    height: '100%'
  }

});