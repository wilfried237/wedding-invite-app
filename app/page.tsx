"use client"

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Heart, Camera, Users, Mail, Phone, Sparkles, Star } from 'lucide-react';

const WeddingInvitationLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // All wedding data stored in an array structure
  const weddingData = {
    couple: {
      names: "Sarah & John",
      photoPlaceholder: {
        text: "Couple's Photo",
        subtext: "Upload your beautiful photo here"
      }
    },
    invitation: {
      header: "You're Invited",
      message: "Together with their families, request the pleasure of your company"
    },
    details: [
      {
        id: 1,
        icon: Calendar,
        title: "Save the Date",
        mainText: "June 15, 2024",
        subText: "Saturday",
        gradient: "from-rose-500 to-pink-500",
        textGradient: "from-rose-600 to-pink-600"
      },
      {
        id: 2,
        icon: Clock,
        title: "Ceremony Time",
        mainText: "4:00 PM",
        subText: "Reception to follow",
        gradient: "from-pink-500 to-purple-500",
        textGradient: "from-pink-600 to-purple-600"
      },
      {
        id: 3,
        icon: MapPin,
        title: "Venue",
        mainText: "Grand Garden Estate",
        subText: "123 Wedding Lane, Love City",
        gradient: "from-purple-500 to-rose-500",
        textGradient: "from-purple-600 to-rose-600",
        buttonText: "View on Maps"
      }
    ],
    gallery: {
      title: "Our Love Story",
      description: "From our first meeting to this magical moment, every step has led us here",
      photos: [1, 2, 3, 4]
    },
    rsvp: {
      title: "Will You Join Us?",
      description: "Your presence would make our special day even more meaningful. Please let us know if you'll be celebrating with us!",
      deadline: "Please respond by May 15, 2024"
    },
    contact: {
      title: "Questions? We're Here to Help",
      methods: [
        {
          id: 1,
          icon: Mail,
          type: "Email Us",
          value: "sarah.john@wedding.com",
          gradient: "from-rose-500 to-pink-500"
        },
        {
          id: 2,
          icon: Phone,
          type: "Call Us",
          value: "+1 (234) 567-8900",
          gradient: "from-purple-500 to-rose-500"
        }
      ]
    },
    footer: {
      message: "Made with love for Sarah & John",
      copyright: "© 2024 Sarah & John's Wedding. All rights reserved."
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating hearts */}
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-rose-300 fill-current opacity-20 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              fontSize: `${0.5 + Math.random() * 1}rem`,
            }}
          />
        ))}
        
        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className={`absolute text-pink-300 opacity-30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              fontSize: `${0.3 + Math.random() * 0.8}rem`,
            }}
          />
        ))}
        
        {/* Mouse follower gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-rose-200/30 via-pink-200/20 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full blur-xl animate-pulse opacity-30"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full blur-xl animate-bounce opacity-20" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300 rounded-full blur-xl animate-ping opacity-25" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-rose-400 rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8 animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
              <span className="text-gray-700 font-medium">{weddingData.invitation.header}</span>
              <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'} hover:scale-105 transform`}>
              {weddingData.couple.names}
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: '1s', animationDuration: '1s' }}>
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32 animate-pulse"></div>
              <Heart className="w-6 h-6 text-rose-400 fill-current animate-spin" style={{ animationDuration: '3s' }} />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32 animate-pulse"></div>
            </div>
            
            <p className={`text-xl md:text-2xl text-gray-600 mb-8 font-light transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ animationDelay: '1.5s' }}>
              {weddingData.invitation.message}
            </p>
          </div>

          {/* Couple Photo Section */}
          <div className={`flex justify-center mb-16 transition-all duration-2000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} style={{ animationDelay: '2s' }}>
            <div className="relative group">
              {/* PLACEHOLDER: Replace with couple's photo */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full shadow-2xl flex items-center justify-center border-8 border-white/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-pulse hover:animate-none group-hover:rotate-3">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-16 h-16 text-rose-400 mx-auto mb-4 animate-bounce" />
                  <p className="text-rose-600 font-medium text-lg">{weddingData.couple.photoPlaceholder.text}</p>
                  <p className="text-rose-500 text-sm">{weddingData.couple.photoPlaceholder.subtext}</p>
                </div>
              </div>
              
              {/* Decorative hearts with enhanced animations */}
              <Heart className="absolute -top-4 -left-4 w-8 h-8 text-rose-400 fill-current animate-bounce hover:animate-spin transition-all duration-300" style={{ animationDelay: '0.5s' }} />
              <Heart className="absolute -bottom-4 -right-4 w-6 h-6 text-pink-400 fill-current animate-pulse hover:animate-bounce transition-all duration-300" style={{ animationDelay: '1s' }} />
              <Heart className="absolute top-10 -right-8 w-4 h-4 text-purple-400 fill-current animate-ping hover:animate-spin transition-all duration-300" style={{ animationDelay: '1.5s' }} />
              
              {/* Orbiting stars */}
              <Star className="absolute top-0 left-1/2 w-3 h-3 text-yellow-400 fill-current animate-spin" style={{ animationDuration: '8s' }} />
              <Sparkles className="absolute bottom-0 right-1/4 w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
            </div>
          </div>

          {/* Wedding Details Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {weddingData.details.map((detail, index) => (
              <div 
                key={detail.id}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                style={{ animationDelay: `${2.5 + index * 0.5}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${detail.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 ${index % 2 === 0 ? 'group-hover:rotate-12' : 'group-hover:-rotate-12'} transition-all duration-500 animate-pulse hover:animate-spin`}>
                  <detail.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">{detail.title}</h3>
                <p className={`text-3xl font-bold bg-gradient-to-r ${detail.textGradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {detail.mainText}
                </p>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{detail.subText}</p>
                {detail.buttonText && (
                  <button className={`mt-4 text-purple-600 hover:text-white font-medium text-sm border border-purple-200 rounded-full px-4 py-2 hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse hover:animate-none`}>
                    {detail.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Gallery Preview Section */}
          <div className={`mb-16 transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '4s' }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                {weddingData.gallery.title}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in">
                {weddingData.gallery.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {weddingData.gallery.photos.map((photo, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-lg flex items-center justify-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-3 hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${4 + i * 0.2}s` }}
                >
                  <div className="text-center group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-rose-400 mx-auto mb-2 animate-bounce group-hover:animate-spin" />
                    <p className="text-rose-600 text-sm font-medium">Photo {photo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RSVP Section */}
          <div className={`text-center mb-16 transition-all duration-2000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ animationDelay: '5s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 max-w-2xl mx-auto hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
              <Users className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full p-4 text-white mx-auto mb-8 animate-bounce group-hover:animate-spin group-hover:scale-110 transition-all duration-500" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                {weddingData.rsvp.title}
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {weddingData.rsvp.description}
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-lg animate-pulse hover:animate-bounce relative overflow-hidden group/btn">
                  <span className="relative z-10">RSVP Now ✨</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '5.5s' }}>
                  {weddingData.rsvp.deadline}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto hover:shadow-2xl hover:scale-105 transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '5.5s' }}>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 hover:text-rose-600 transition-colors duration-300">
              {weddingData.contact.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {weddingData.contact.methods.map((method) => (
                <a
                  key={method.id}
                  href={method.type === "Email Us" ? `mailto:${method.value}` : `tel:${method.value.replace(/\D/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-500 group hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center group-hover:scale-125 ${method.id % 2 === 0 ? 'group-hover:-rotate-12' : 'group-hover:rotate-12'} transition-all duration-500 animate-pulse hover:animate-spin`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <p className="font-semibold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">{method.type}</p>
                    <p className="text-gray-600 text-sm">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`text-center py-12 border-t border-white/20 transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ animationDelay: '6s' }}>
        <div className="flex items-center justify-center gap-2 mb-4 animate-pulse">
          <Heart className="w-5 h-5 text-rose-400 fill-current animate-bounce" />
          <span className="text-gray-600">{weddingData.footer.message}</span>
          <Heart className="w-5 h-5 text-rose-400 fill-current animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
        <p className="text-gray-500 text-sm animate-fade-in" style={{ animationDelay: '6.5s' }}>
          {weddingData.footer.copyright}
        </p>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default WeddingInvitationLanding;