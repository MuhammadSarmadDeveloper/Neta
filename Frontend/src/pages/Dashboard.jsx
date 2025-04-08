import React, { useState } from 'react';
import net from '../assets/net.png';
import shop from '../assets/shop.png';
import rev from '../assets/rev.png';
import chara from '../assets/chara.png'
import { FaShoppingBasket } from "react-icons/fa";
// import roboc from '../assets/roboc.png';
import { Link } from 'react-router-dom';
import visa from '../assets/vi.png';
import google from '../assets/gg.png';
import { FiHome, FiFolder, FiTool,FiTag,FiSettings,FiBell,FiMenu,FiGrid,FiMessageSquare,FiX,FiMic,FiPaperclip,FiLogOut, 
FiThumbsUp,FiRefreshCw,FiVolume2 } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import users from '../assets/duser.png';
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Company Name',
    avatar: ''
  });

  return (
    <div className="min-h-auto bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 text-white p-4 flex items-center justify-between md:hidden">
        <div className="flex items-center space-x-2">
          <FiMenu className="h-6 w-6 text-blue-800" onClick={() => setMobileMenuOpen(true)} />
          <div><img src={users} alt="User" className='w-[3em] h-10' /></div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FiBell className="h-5 w-5 text-blue-800" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>
          <Link to='/'>
            <button className="relative">
              <FiHome className="h-5 w-5 text-blue-800" /> 
            </button>
          </Link>
        </div>
      </header>

      {/* Sidebar - Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-4 flex justify-between items-center border-b">
              <div><img src={net} alt="Logo" className='w-[4rem] h-auto' /></div>
              <FiX className="h-6 w-6 text-gray-500" onClick={() => setMobileMenuOpen(false)} />
            </div>
            <SidebarContent 
              user={user} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              mobileClose={() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* Sidebar - Desktop */}
      <aside className="hidden md:block md:w-64 bg-white shadow-md h-screen sticky top-0">
        <div className="p-4 border-b">
          <div><img src={net} alt="Logo" className='w-[8rem] h-12' /></div>
        </div>
        <SidebarContent user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Desktop Header */}
        <header className="hidden md:block bg-white shadow-sm p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
            <div className="flex items-center space-x-6">
              <button className="relative">
                <FiBell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <Link to='/'>
                <button className="relative">
                  <FiHome className="h-5 w-5 text-blue-800" /> 
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="container mx-auto p-4 md:p-8">
          {activeTab === 'dashboard' && <DashboardContent />}
          {activeTab === 'edit profile' && <EditProfile />}
          {activeTab === 'subscription & plan' && <Subscription />}
          {activeTab === 'Free Offer' && <FreeOffer />}
          {activeTab === 'Previous chat' && <PreviousChat />}
          {activeTab === 'new chat' && <NewChat/>}
        </div>
      </main>
    </div>
  );
};

// Sidebar Content Component
const SidebarContent = ({ user, activeTab, setActiveTab, mobileClose }) => {
  const navItems = [
    { id: 'dashboard', icon: <FiGrid className="h-5 w-5" />, label: 'Dashboard' },
    { id: 'edit profile', icon: <FiFolder className="h-5 w-5" />, label: 'Edit Profile' },
    { id: 'subscription & plan', icon: <FiTool className="h-5 w-5" />, label: 'Subscription & History' },
    { id: 'Free Offer', icon: <FiTag className="h-5 w-5" />, label: 'Free Offer' },
    { id: 'Previous chat', icon: <FiSettings className="h-5 w-5" />, label: 'Previous Chat' },
    { id: 'new chat', icon: <FiMessageSquare className="h-5 w-5" />, label: 'New Chat' },
  ];

  return (
    <div className="h-auto flex flex-col">
      {/* User Profile */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <div><img src={users} alt="User" className='w-[3em] h-10' /></div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  mobileClose && mobileClose();
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Sidebar Footer */}
      <div className="p-4 ">
        <Link to='/login'>
        <button className="w-full flex items-center  mt-[3rem] space-x-3 p-3 rounded-lg text-gray-700 hover:bg-sky-200">
          <FiLogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

// Dashboard Content Component
const DashboardContent = () => {
  // const [showInput, setShowInput] = useState(false);

  // const handleNewChatClick = () => {
  //   setShowInput(true);
  // };

  return (
    <div className="h-auto bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl lg:mt-[-4.5rem] md:mt-[-4.5rem] mt-0 rounded-lg p-6 space-y-6">
      <div className="mt-6 relative">
            <input 
              type="text" 
              placeholder="Ask Question" 
              className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
              <button 
                type="button" 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Attach file"
              >
                <FiPaperclip className="h-5 w-5" />
              </button>
              <button 
                type="button" 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Voice input"
              >
                <FiMic className="h-5 w-5" />
              </button>
            </div>
          </div>
        <div className="flex flex-col items-center space-y-4">
          
          <img 
            src={chara} 
            alt="Help Icon" 
            className="w-[300px] h-[260px]" 
          />
          <h1 className="text-2xl font-semibold text-gray-800">How may I help you?</h1>
          <p className="text-gray-500 text-center">
            This chat won't appear in history, create memories, or train models. For safety, we may keep it for up to 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              // onClick={handleNewChatClick}
              className="px-6 py-3 bg-[#16ab4d] text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#11668f] focus:ring-offset-2"
            >
              New chat
            </button>
            <button className="px-6 py-3 bg-[#0e638c] text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#11668f] focus:ring-offset-2">
              Previous chat
            </button>
          </div>
        </div>

        {/* {showInput && ( */}
        
        {/* )} */}
      </div>
    </div>
  );
};

// Edit Profile Component
const EditProfile = () => (
  <div className="h-auto bg-gray-50 flex items-center justify-center p-4">
    <div className="w-full max-w-lg lg:mt-[-2rem] md:mt-[-2rem] mt-0  rounded-lg  p-6">
      <div className='w-28 h-28 rounded-full text-center flex flex-col justify-center mx-auto bg-gray-200'>
        <FaUserPlus size={50} className="mx-auto text-gray-500" />
      </div> 
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="jogh5544@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <div className="flex gap-2">
            <div className="bg-gray-100 rounded-md w-20">
              <input
                type="text"
                placeholder="+92"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-gray-100 rounded-md flex-grow">
              <input
                type="text"
                placeholder="56435564"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Where do you get your supplies?</label>
          <input
            type="text"
            placeholder="Enter here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number Of electricians</label>
          <input
            type="text"
            placeholder="Enter here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#1c87b7] text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  </div>
);

// Subscription Component
const Subscription = () => (
  <div className='flex justify-center lg:flex-row flex-col sm:w-full gap-8'>
    <div className="relative lg:w-[25rem] h-80 sm:w-full w-full bg-white rounded-2xl p-6 hover:border-2 border-blue-400 hover:shadow-lg flex flex-col justify-around items-stretch">
      <img src={shop} alt="Shop" className='w-10 h-10'/>
      <span className="text-black font-semibold text-xl">Electrician Free Tier</span>
      <p className="text-base text-blue-800">Electrical Assistant -5 Chats a day</p>
      <div className="flex flex-col gap-2">
        <button className="border-2 bg-[#1e86b9]  py-1 rounded text-gray-50 hover:bg-blue-400">Free</button>
      </div>
      <div className="absolute top-3 right-2 text-red-300 hover:text-red-500">
        <div className='bg-[#15b264] mt-5 px-4 rounded-md'><span className='text-white'>Free</span></div>
      </div>
    </div>
    <div className="relative lg:w-[25rem] h-80 w-full hover:border-2 border-blue-400 hover:shadow-lg md:w-full bg-white rounded-2xl p-6 shadow flex flex-col justify-around items-stretch">
      <img src={shop} alt="Shop" className='w-10 h-10'/>
      <span className="text-black font-semibold text-xl">Pro Electrician Free Tier</span>
      <p className="text-base text-blue-800">Unlimited Chats and uploads</p>
      <div className="flex flex-col gap-2">
        <button className="border-2 bg-[#1e86b9]  py-1 rounded text-gray-50 hover:bg-blue-400">Free</button>
      </div>
      <div className="absolute top-3 right-2 text-red-300 hover:text-red-500">
        <div className='bg-[#1e86b9] mt-5 px-4 rounded-md'><span className='text-white'>$ 9.99/month</span></div>
      </div>
    </div>
  </div>
);

// Free Offer Component
const FreeOffer = () => (
  <div className='flex flex-col'>
    <div className="relative mx-auto hover:border-2 border-blue-400 hover:shadow-lg lg:w-[25rem] h-80 w-full md:w-full bg-white rounded-2xl p-6 shadow flex flex-col justify-around items-stretch">
      <img src={shop} alt="Shop" className='w-10 h-10'/>
      <span className="text-black font-semibold text-xl">Pro Electrician Free Tier</span>
      <p className="text-base text-blue-800">Electrical Assistant -5 Chats a day</p>
      <div className="flex flex-col gap-2">
        <button className="border-2 bg-[#1e86b9] py-1 rounded text-gray-50 hover:bg-blue-400">Free</button>
      </div>
      <div className="absolute top-3 right-2 text-red-300 hover:text-red-500">
        <div className='bg-[#1e86b9] mt-5 px-4 rounded-md'><span className='text-white'>$ 9.99/month</span></div>
      </div>
    </div>
    <div className="flex flex-col gap-3 w-full max-w-md md:max-w-lg mx-auto p-4 md:flex-row sm:gap-2">
      <button className="flex items-center justify-center flex-1 bg-[#e07501] gap-4 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 md:w-full sm:py-2">
        <img src={visa} alt="Visa" className='w-8 h-8'/>
        Visa Pay
      </button>
      <button className="flex items-center justify-center flex-1 bg-[#1e86b9] gap-3 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 md:w-full sm:py-2">
        <img src={google} alt="Google Pay" className='w-12 h-6'/>
        Google Pay
      </button>
    </div>
  </div>
);

// Previous Chat Component
const PreviousChat = () => (
  <div>
  <div className="max-w-lg mx-auto p-4 bg-white">
    <div className="flex items-center mb-6">
      <img 
        src={rev} 
        alt="Profile"
        className="w-11 h-10 rounded-full mr-3"
      />
      <h1 className="text-2xl font-bold text-gray-800">Image Creators</h1>
    </div>

    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
        <div className="flex items-center">
          <img 
            src={rev} 
            alt="Profile"
            className="w-11 h-10 rounded-full mr-3"
          />
          <span className="text-gray-700 font-medium">Image Creators</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-gray-500 text-sm">2 hours ago</span>
          <FaShoppingBasket className="text-red-500 cursor-pointer mt-1" />
        </div>
      </div>

      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
          <div className="flex items-center">
            <img 
              src={rev} 
              alt="Profile"
              className="w-11 h-10 rounded-full mr-3"
            />
            <span className="text-gray-700 font-medium">Image Creators</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-500 text-sm">Yesterday</span>
            <FaShoppingBasket className="text-red-500 cursor-pointer mt-1" />
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
);

// New Chat Component
const NewChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      text: "Help me customize a one-week fitness and diet weight loss plan.",
    },
    {
      id: 2,
      sender: "assistant",
      text: `Some of the popular tourist destinations in the United States are as follows:
      
New York City is a must-visit, with its renowned Times Square, the Statue of Liberty standing tall in the harbor, and the vast and beautiful Central Park.

Los Angeles attracts countless tourists with the allure of Hollywood, where you can catch a glimpse of the glitz and glamour of the film industry, as well as the exciting Universal Studios.

San Francisco is known for the magnificent Golden Gate Bridge that spans the bay, the notorious Alcatraz Island, and its unique and charming neighborhoods.`,
    },
    {
      id: 3,
      sender: "assistant",
      text: "What is the food in America?",
    },
    {
      id: 4,
      sender: "assistant",
      text: "Tell me more.",
    },
  ]);

  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now(), sender: "user", text: inputText },
      ]);
      setInputText("");
    }
  };

  const handleVoiceInput = () => {
    alert("Voice input activated");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`File selected: ${file.name}`);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full p-2 sm:p-4">
      <div className="flex-grow overflow-y-auto pb-16 sm:pb-20">
        <div className="space-y-2 sm:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                <div
                  className={`relative ${
                    message.sender === "user" ? 'bg-[#afdbf1]' : 'bg-white'
                  } text-black px-3 py-2 rounded-lg`}
                >
                  <p className="text-lg font-semibold sm:text-sm whitespace-pre-wrap break-words">
                    {message.text}
                  </p>
                  
                  {message.sender === "assistant" && (
                    <div className="flex justify-end space-x-2 mt-2">
                      <button className="text-gray-600 hover:text-blue-500">
                        <FiThumbsUp className="w-4 text-blue-800 h-4" />
                      </button>
                      <button className="text-gray-600  hover:text-green-500">
                        <FiVolume2 className="w-4 text-blue-800 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-purple-500">
                        <FiMessageSquare className="w-4 text-blue-800 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-orange-500">
                        <FiRefreshCw className="w-4 text-blue-800 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form 
  onSubmit={handleSendMessage} 
  className="fixed bottom-0 left-0 right-0 p-2 sm:p-4 bg-gray-50 z-10"
>
  <div className="flex items-center w-full lg:ml-[28rem] mt-[-3rem] md:ml-0 ml-0 max-w-4xl mx-auto bg-white rounded-full shadow-md px-3 sm:px-4">
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Send message..."
      className="flex-grow outline-none py-2 sm:py-3 text-xs sm:text-sm bg-transparent"
    />

    {/* Voice input button */}
    <button
      type="button"
      onClick={handleVoiceInput}
      className="p-2 text-gray-500 hover:text-gray-700"
    >
      <FiMic className="w-5 h-5" />
    </button>

    {/* File upload button */}
    <label className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer">
      <FiPaperclip className="w-5 h-5" />
      <input 
        type="file" 
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  </div>
</form>

    </div>
  );
};

export default Dashboard;