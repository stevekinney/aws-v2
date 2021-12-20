import { useParams } from 'react-router-dom';

const content = {
  hipster:
    "I'm baby glossier coloring book godard migas PBR&B. Cred viral stumptown tbh health goth whatever brunch dreamcatcher iPhone skateboard austin. Shaman kombucha everyday carry vice, raw denim typewriter offal tacos thundercats subway tile try-hard lumbersexual tofu chia brunch. Meditation craft beer health goth cray raclette woke.",
  zombie:
    'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.',
  cupcake:
    'Sugar plum marzipan cotton candy pie sweet roll muffin. Pudding sweet roll carrot cake danish gingerbread candy canes lemon drops lemon drops. Ice cream tootsie roll sweet roll jelly beans carrot cake. Ice cream caramels sesame snaps jelly lemon drops tart pastry. Sugar plum cotton candy wafer cake chocolate cake jelly beans danish. Jelly-o wafer pie cookie macaroon sugar plum. Topping dessert jujubes icing croissant donut sweet. Chocolate cake liquorice candy marshmallow gummi bears. Jelly jujubes biscuit cake cookie topping. Donut marshmallow powder jujubes chupa chups. Cotton candy icing marshmallow candy canes cake. Gingerbread toffee biscuit jujubes chocolate. Brownie sweet cupcake gummi bears tootsie roll danish bear claw jujubes. Chocolate cake sugar plum bonbon oat cake candy dragée candy canes danish donut.',
  cat: "Chill on the couch table bite nose of your human, i shall purr myself to sleep meow to be let in. Mrow there's a forty year old lady there let us feast litter box is life, and sleeps on my head but make muffins, or lick sellotape. Go into a room to decide you didn't want to be in there anyway run around the house at 4 in the morning. Curl up and sleep on the freshly laundered towels damn that dog . Crash against wall but walk away like nothing happened love blinks and purr purr purr purr yawn or jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed or headbutt owner's knee yet stare at guinea pigs and refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am.",
  cheese:
    "Queso hard cheese pecorino. Caerphilly pecorino gouda taleggio cheeseburger cheese and wine taleggio croque monsieur. Airedale cheese and wine goat boursin rubber cheese bocconcini st. agur blue cheese feta. Airedale airedale when the cheese comes out everybody's happy cheese and wine cheese triangles brie cut the cheese bavarian bergkase. Gouda taleggio cream cheese emmental cheesy grin mozzarella bavarian bergkase pepper jack. Ricotta pepper jack say cheese gouda squirty cheese jarlsberg pepper jack jarlsberg. Fromage babybel macaroni cheese who moved my cheese cow pecorino.",
  office:
    "Keep it lean cadence. Deep dive i need to pee and then go to another meeting and focus on the customer journey yet performance review. Thought shower I just wanted to give you a heads-up tiger team. Ensure to follow requirements when developing solutions pulling teeth, so deep dive single wringable neck or on-brand but completeley fresh yet we need to harvest synergy effects. Let's unpack that later what's the status on the deliverables for eow?, yet in an ideal world and on this journey yet churning anomalies we want to see more charts or target rich environment",
};

export const Page = () => {
  const { id } = useParams();
  return <p>{content[id]}</p>;
};
