import React, { useState, useEffect } from 'react';
//to determine the id of the exercise we are currently on
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData.js';

//import ErrorBoundary from '../components/ErrorBoundary.js';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';




const ExerciseDetail = () => {
  const [ exerciseDetail, setExerciseDetail ] = useState({});
  //const [ updated, setUpdated ] = useState(1);
  const [ exerciseVideos, setExerciseVideos ]= useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    

    const fetchExercisesData = async () => {
      const exerciseDburl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDburl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData);

      const targetMuscleExercisesData = await fetchData(`${exerciseDburl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);

    };

    fetchExercisesData();

  }, [id]);
  //setUpdated(!updated);

  if (!exerciseDetail) return <div>No Data</div>;


  return (
    <Box>
      
      <Detail exerciseDetail={exerciseDetail} />
      
      
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      
      
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
      
    </Box>
  );
};

export default ExerciseDetail