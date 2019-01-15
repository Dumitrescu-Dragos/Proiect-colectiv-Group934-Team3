﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend2.Model
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserRegisterDTO>();
            CreateMap<UserRegisterDTO, User>();
        }
    }
}
