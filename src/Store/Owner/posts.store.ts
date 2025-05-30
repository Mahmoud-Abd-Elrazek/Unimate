import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useAuthStore from '../Auth/Auth.store';

interface Room {
  id: string;
  description: string;
  capacity: number;
  bedPrice: number;
  hasAC: boolean;
  imageUrl: string;
}

interface PostsState {
  Num: number;
  Location: string;
  DescribeLocation: string;
  NumberOfRooms: string;
  Floor: string;
  Capecity: number;
  Description: string;
  GenderAcceptance: number;
  DurationType: number;
    // the tird page
  kitchenImage: File | undefined;
  bathroomImage: File | undefined;
  outsideImage: File | undefined;
  livingRoomImage: File | undefined;
    // the second page
  Rooms: Room[];
  id:string;
  description: string;
  capacity: number;
    bedPrice: number;
    hasAC: boolean;
    imageUrl: File | undefined;
  setNum: (Num: number) => void;
  setLocation: (Location: string) => void;
  setDescribeLocation: (DescribeLocation: string) => void;
  setNumberOfRooms: (NumberOfRooms: string) => void;
  setCapecity: (Capecity: number) => void;
  setDescription: (Description: string) => void;
  setFloor: (Floor: string) => void;
  setGenderAcceptance: (GenderAcceptance: string) => void;
  setDurationType: (DurationType: string) => void;

  setKitchenImage: (kitchenImage: File | undefined) => void;
  setBathroomImage: (bathroomImage: File | undefined) => void;
  setOutsideImage: (outsideImage: File | undefined) => void;
  setLivingRoomImage: (livingRoomImage: File | undefined) => void;

  addRoom: () => void;
  updateRoom: (updatedRoom: Room) => void;
  deleteRoom: (roomId: string) => void;

  AddPost: () => Promise<void>;
}

export const usePostsStore = create<PostsState>()(
  persist(
    (set, get) => ({
      Num: Math.floor(Math.random() * 1000),
      Location: '',
      Description: '',
      Floor: '',
      GenderAcceptance: 0,
      DurationType: 0,
      DescribeLocation: '',
      NumberOfRooms: '',
      Capecity: 0,

      kitchenImage: undefined,
      bathroomImage: undefined,
      outsideImage: undefined,
      livingRoomImage: undefined,

      Rooms: [],
        id: '',
        description: '',
        capacity: 0,
        bedPrice: 0,
        hasAC: false,
        imageUrl: undefined,

      setNum: (Num) => set({ Num }),
      setLocation: (Location) => set({ Location }),
      setDescription: (Description) => set({ Description }),
      setFloor: (Floor) => set({ Floor }),
      setGenderAcceptance: (GenderAcceptance) => set({ GenderAcceptance:Number(GenderAcceptance) }),
      setDurationType: (DurationType) => set({ DurationType: Number(DurationType) }),
      setDescribeLocation: (DescribeLocation) => set({ DescribeLocation }),
      setNumberOfRooms: (NumberOfRooms) => set({ NumberOfRooms }),
      setCapecity: (Capecity) => set({ Capecity }),

      setKitchenImage: (kitchenImage) => set({ kitchenImage }),
      setBathroomImage: (bathroomImage) => set({ bathroomImage }),
      setOutsideImage: (outsideImage) => set({ outsideImage }),
      setLivingRoomImage: (livingRoomImage) => set({ livingRoomImage }),

      addRoom: () => {
        // const newRoom: Room = {
        //   id: `room-${Date.now()}`,
        //   description: description,
        //   capacity: capacity,
        //   bedPrice: bedPrice,
        //   hasAC: hasAC,
        //   imageUrl: imageUrl,
        // };
        // set((state) => ({ Rooms: [...state.Rooms, newRoom] }));
      },

      updateRoom: (updatedRoom) => {
        set((state) => ({
          Rooms: state.Rooms.map((room) =>
            room.id === updatedRoom.id ? updatedRoom : room
          ),
        }));
      },

      deleteRoom: (roomId) => {
        set((state) => ({
          Rooms: state.Rooms.filter((room) => room.id !== roomId),
        }));
      },

      AddPost: async () => {
          const formData = new FormData();
        try {
          const state = get();

          formData.append('Num', state.Num.toString());
          formData.append('Location', state.Location);
          formData.append('Description', state.Description);
          formData.append('Floor', state.Floor);
          formData.append('GenderAcceptance', state.GenderAcceptance.toString());
          formData.append('DurationType', state.DurationType.toString());
          formData.append('DescribeLocation', state.DescribeLocation);
          formData.append('NumberOfRooms', state.NumberOfRooms);
          formData.append('Capecity', state.Capecity.toString());

          if (state.kitchenImage) formData.append('KitchenImage', state.kitchenImage);
          if (state.bathroomImage) formData.append('BathroomImage', state.bathroomImage);
          if (state.outsideImage) formData.append('OutsideImage', state.outsideImage);
          if (state.livingRoomImage) formData.append('LivingRoomImage', state.livingRoomImage);

          formData.append('Rooms', JSON.stringify(state.Rooms));

          const res = await axios.post(
            'https://darkteam.runasp.net/SubmitPostEndPoint/SubmitPost',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${useAuthStore.getState().token}`,
              },
            }
          );

          console.log('Post added successfully:', res);
          console.log('Form data added successfully:', formData);
          
        } catch (error) {
            console.error('Failed to add post:', error);
            console.log('Form data added error:', formData);
        }
      },
    }),
    {
      name: 'posts-storage',
    }
  )
);