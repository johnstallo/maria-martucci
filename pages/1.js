import ChapterLayout from '../components/ChapterLayout'
import Photo from '../components/Photo'

export default () => (
  <ChapterLayout
    pageTitle="Maria Martucci - Introduction"
    chapterTitle="1. Introduction"
    next="/2"
    nextTitle="My mother's conversion">
    
    <p>My mother, Maria Martucci, was born to Martucci Donato and Lattarulo Rosa Antonia in Mottola, a town in the province of Taranto, on 16th September 1909. Theirs was a large family; her mother worked at home as a seamstress so, as the eldest daughter, the housework and care of the younger brothers were entrusted to Maria who worked with commitment and joy.</p>

    <p>My father, Cosimo Stallo, was born to Giovanni Stallo and Maria Annunziata Mellone on 2nd November 1905 in Massafra. His was a poor family. Cosimo was only 17 years old when his father was hit by a train on his way to work and died.</p>

    <p>Being the only boy out of five children - Antonia, Cosimo, Lucia, Leonarda and Pompea - from that moment on, my father began to take care of his home, taking the place and responsibility as the head of the family and real breadwinner.</p>
        
    <p>When my mother was 20 years old, on November 10, 1929, my parents married and settled in Mottola.</p>

    <p>They had three children in the early years of their marriage: a girl and two boys. Sadly, an infectious disease struck the family, claiming the lives of their first two children. After this profound loss, my parents decided to move to my father's hometown of Massafra in 1936, along with their youngest child, Giovanni, who was about two years old at the time.</p>

    <Photo src="../static/maria-martucci-cosimo-stallo.jpg" caption="My parents, Maria Martucci and Cosimo Stallo (1980)" />
  </ChapterLayout>
)
