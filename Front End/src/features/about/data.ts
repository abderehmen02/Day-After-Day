import { AboutPageComponentsType } from "../../types/data/about";
import GoalsImageVisualise from '../../assets/images/goalsVisualise.png'
import ProductivityImageVisualise from '../../assets/images/productivityVisualise.png'
import JournalingImageVisualise from '../../assets/images/journalingVisualise.png'
import DayAfterDayLogo from '../../assets/images/dayAfterDayLogo.png'
export const AboutPageComponents: AboutPageComponentsType = [{title : 'What Is Day After Day'  ,  image : DayAfterDayLogo  , paragraphs: ["it is an app used to help you organize your taughts , goals , and journaling throught your days " , 'doing that every day will help you increase your ideas and get more control over your thoughts and traching your goals ' ,"that will help you to increase your productivity and be more efficient throught your day " ]} ,{title: 'Productivity' , subtitle : 'Set how many hours you have been productive in your day'  , image : ProductivityImageVisualise , paragraphs : ['Setting how many hours you have been productive each day will help you to get a clear idea about the months and the days that you have been productive in , and then you have to figure out the reoson why you have been productive on these days' ,'you will also see the days that you have not been productive in and you will figure out the reasons why you have not been productive in these days  ']} ,{title : 'Goals' , subtitle : 'Write down your goals and return back to set your progress' , image : GoalsImageVisualise , paragraphs : ['Setting your goals will give you a clear idea of where you want to be after a specific period of time ' , 'don’t forget to return back and set your progress' , 'your progress is the racio between the steps that you have already token and the steps left to reach  your pre determined goal']} ,{title : 'Journals' , subtitle : 'Write down the important  thoughts that happened in your day' , image : JournalingImageVisualise ,paragraphs : ["here you can write the important ideas that  you don’t want to foreget" ,'you can return back later and read these ideas'] } ]