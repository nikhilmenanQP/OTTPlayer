type SharedStackProps = {
  initialRouteName: 'HomeScreen' | 'MoviesScreen';
};

type RootStackParamList = {
  DetailScreen: {
    data: any;
  };
  HomeScreen: undefined;
  MoviesScreen: undefined;
  PlayerScreen: undefined;
  ProfileScreen: undefined;
};
